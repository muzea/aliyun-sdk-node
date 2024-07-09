export interface DeleteFolderResponse {
    /**
     * id of request
     * @example `022F36C7-9FB4-5D67-BEBC-3D14B0984463`
     */
    requestId: string;
    /**
     * Response<Map<String, String>>
     */
    result: {
        /**
         * 返回结果
         */
        result: any;
        /**
         * 请求id
         * @example `022F36C7-9FB4-5D67-BEBC-3D14B0984463`
         */
        requestId: string;
    };
}
