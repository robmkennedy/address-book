import { ReactNode } from 'react';
import './NavList.scss';

type NavListProps<T> = {
    items: T[],
    selectedItem: T | undefined,
    render: (item: T) => ReactNode,
    onSelect: (item: T) => void,
    filter?: (item: T) => boolean,
    category?: (item: T) => string,
    sort?: (itemA: T, itemB: T) => number,
    emptyText?: string
};

/**
 * A common component used to display a list of items.
 * This will be a reusable component. We use generics to allow it to accept a list of items 
 * of any type. However, this still needs to understand how to render each item in the list. 
 * Therefore we use a render property function that will return the react component to display.
 * We allow an optional onSelect function prop which will return the object type when it is clicked.
 * We also allow optional filtering and sorting functions.
 * After filtering, if no items remain, a default message is displayed to the user.
 */
export default function NavList<T>(props: NavListProps<T>) {
    const { items, selectedItem, render, onSelect, filter, category, sort, emptyText } = props;

    let newItems = [...items];
    if (filter) {
        newItems = newItems.filter(filter);
    }
    if (sort) {
        newItems.sort(sort);
    }
    let content = null;
    if (newItems.length === 0) {
        content = (
            <div className='rk-nav-list-empty'>{emptyText || ''}</div>
        );
    }
    else if (category) {
        content = [];
        const letterMap: Map<string, T[]> = new Map();
        newItems.forEach((newItem) => {
            const firstLetter = category(newItem);
            const existingArray = letterMap.get(firstLetter);
            if (existingArray) {
                existingArray.push(newItem);
            }
            else {
                letterMap.set(firstLetter, [newItem]);
            }
        });

        let index = 0;
        for (let [key, array] of letterMap) {
            content.push(
                <div className='rk-nav-category' key={index}>{key}</div>
            );
            index += 1;
            for (let item of array) {
                const activeString = item === selectedItem ? 'active' : ''
                content.push(<div className={`rk-nav-list-item ${activeString}`} key={index} onClick={() => onSelect(item)}>{render(item)}</div>);
                index += 1;
            }
        };
    }
    else {
        content = newItems.map((item, index) => {
            const activeString = item === selectedItem ? 'active' : ''
            return <div className={`rk-nav-list-item ${activeString}`} key={index} onClick={() => onSelect(item)}>{render(item)}</div>
        });
    }

    return (
        <div className='rk-nav-list'>
            <div className='rk-nav-list-content'>
                {content}
            </div>
        </div>
    );
}