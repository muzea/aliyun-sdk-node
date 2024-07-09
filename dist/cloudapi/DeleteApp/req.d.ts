export interface DeleteAppRequest {
    /**
     * APP唯一编号
     * @example `110840611`
     */
    "AppId": number;
    /**
     * 标签列表。最多20个元素。
     * @example `test2`
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `appname`
         */
        Key: string;
        /**
         * 标签值。
         * @example `testapp`
         */
        Value: string;
    }[];
}
