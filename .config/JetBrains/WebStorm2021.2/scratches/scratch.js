function matek(szam) {
    if (szam === undefined) {
        return 0;
    }

    if (typeof szam === "string") {
        return 1;
    }

    if (Number.isInteger(szam)) {
        if (szam % 2 === 0) {
            return szam ** szam;
        } else {
            return (szam-1) ** 2;
        }
    }

    return null;
}
