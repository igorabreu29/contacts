export function useList() {
    const orderByName = (data: any[]) => {
        return data.sort((a, b) => {
            const nameA = a.name.toLowerCase()
            const nameB = b.name.toLowerCase()

            if (nameA < nameB) return -1

            if (nameA > nameB) return 1

            return 0
        })
    }

    const groups = (data: any[]) => {
        return data.reduce((acc, items) => {
            const groupsCategory = items.category

            if (!acc[groupsCategory]) {
                 acc[groupsCategory] = []
            }

            acc[groupsCategory].push(items)

            return acc
        }, [])
    }

    return {orderByName, groups}
}