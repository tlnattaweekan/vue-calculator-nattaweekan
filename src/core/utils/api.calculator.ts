export async function apiCalculator(data: string) {
    let result;
    const encodeData = encodeURIComponent(data);
    try {
        const res = await fetch(
            `https://api.mathjs.org/v4/?expr=${encodeData}`
        );
        result = await res.json();
    } catch (error) {
        console.log("error", error);
    }
    return result;
}