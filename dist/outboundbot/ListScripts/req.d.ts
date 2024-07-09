export interface ListScriptsRequest {
    /**
     * 实例id
     * @example `bdd49242-114c-4045-b1d1-25ccc1756c75`
     */
    "InstanceId": string;
    /**
     * 页号
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示的条数
     * @example `10`
     */
    "PageSize": number;
}
