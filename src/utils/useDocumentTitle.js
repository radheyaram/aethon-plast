import { useEffect } from 'react';

/**
 * Custom hook to update the document title.
 * @param {string} title - The title to set.
 */
const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

export default useDocumentTitle;
