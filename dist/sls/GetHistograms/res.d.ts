export type GetHistogramsResponse = {
    /**
     * 子时间区间的开始时间点。UNIX时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * 时间区间遵循“左闭右开”原则，即该时间区间包括区间开始时间点，但不包括区间结束时间点。如果from和to的值相同，则为无效区间，函数直接返回错误。
     * @example `1409529600`
     */
    from: number;
    /**
     * 子时间区间的结束时间点。UNIX时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * 时间区间遵循“左闭右开”原则，即该时间区间包括区间开始时间点，但不包括区间结束时间点。如果from和to的值相同，则为无效区间，函数直接返回错误。
     * @example `1409569200`
     */
    to: number;
    /**
     * 该子时间区间内查询到的日志条数。
     * @example `2`
     */
    count: number;
    /**
     * 当前查询结果在该子时间区间内的结果是否完整。
     * Complete：查询已经完成，返回结果为完整结果。
     * Incomplete：查询已经完成，返回结果为不完整结果，需要重复请求以获得完整结果。
     * @example `Complete`
     */
    progress: string;
}[];
