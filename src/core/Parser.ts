export function functionalMatcher(description: string): string[] {
    const regExp: RegExp = new RegExp('(\\$F:?\\s)(.*)(\\n)', 'g');
    return matcher(description, regExp);
}

export function nonFunctionalMatcher(description: string): string[] {
    const regExp: RegExp = new RegExp('(\\$NF:?\\s)(.*)(\\n)', 'g');
    return matcher(description, regExp);
}

export function internalBugMatcher(description: string): string[] {
    const regExp: RegExp = new RegExp('(\\$IB:?\\s)(.*)(\\n)', 'g');
    return matcher(description, regExp);
}

export function customerBugMatcher(description: string): string[] {
    const regExp: RegExp = new RegExp('/(\\$CB:?\\s)(.*)(\\n)', 'g');
    return matcher(description, regExp);
}

function matcher(description: string, regExp: RegExp): string[] {
    return [...description.matchAll(regExp)].map(m => m[2]);
}