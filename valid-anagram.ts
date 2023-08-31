function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const charCount: { [key: string]: number } = {};

    for (let i = 0; i < s.length; i++) {
        if (!charCount[s[i]]) charCount[s[i]] = 0;
        charCount[s[i]]++;

        if (!charCount[t[i]]) charCount[t[i]] = 0;
        charCount[t[i]]--;
    }

    for (const key in charCount) {
        if (charCount[key] !== 0) return false;
    }

    return true;
};
