export interface RemoveVpcAccessResponse {
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ015`
     */
    RequestId: string;
    Apis: {
        /**
         * API 列表
         */
        Api: {
            /**
             * API Id
             * @example `551877242a4b4f3a84a56b7c3570e4a7`
             */
            ApiId: string;
            /**
             * 环境 ID
             * @example `d1e1ee28f9fb4b729db0ee8ca76ff0a5`
             */
            StageId: string;
            /**
             * API分组ID
             * @example `78d54ac4424d4b1792e33ca35637e8e4`
             */
            GroupId: string;
        }[];
    };
}
