const toCamelCase = (str) => {

    return str.replace(/_([a-z])/g,
        (_, char) => char.toUpperCase()
    );
};


export const convertKeysToCamelCase = (obj) => {

    if (Array.isArray(obj)) {

        return obj.map(item =>
            convertKeysToCamelCase(item)
        );
    }

    else if (
        obj !== null &&
        typeof obj === "object"
    ) {

        const newObj = {};

        for (let key in obj) {

            newObj[toCamelCase(key)] =
                convertKeysToCamelCase(obj[key]);
        }

        return newObj;
    }

    return obj;
};