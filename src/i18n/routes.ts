export const localePaths = [
    { params: { locale: undefined } },
    { params: { locale: "es" } },
];

export function getLocaleStaticPaths() {
    return [
        { params: { locale: undefined } },
        { params: { locale: "es" } },
    ];
}