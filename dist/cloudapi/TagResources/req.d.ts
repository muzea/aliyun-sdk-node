export interface TagResourcesRequest {
    /**
     * 资源类型定义，目前分组，插件，应用接入了标签，API相关操作基于分组的标签：
     * - **apiGroup**
     * - **plugin**
     * - **app**
     * - **api**
     * @example `apiGroup`
     */
    "ResourceType": string;
    /**
     * 资源的标签值。
     * @example `2021022811`
     */
    "Tag": {
        /**
         * 标签键。
         * n 的取值范围为 `[1, 20]`
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。
         * n 的取值范围为 `[1, 20]`
         * @example `' '`
         */
        Value: string;
    }[];
    /**
     * 资源ID。
     * n的取值范围为`[1, 50]`
     * @example `285bb759342649a1b70c2093a772e087`
     */
    "ResourceId": string[];
}
