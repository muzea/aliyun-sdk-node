export interface ListProceedingsRequest {
    /**
     * 应用分组ID。
     * @example `120677456`
     */
    "appGroupIdentity": string;
    /**
     * 是否过滤已完成。
     * @example `true`
     */
    "filterFinished"?: boolean;
}
