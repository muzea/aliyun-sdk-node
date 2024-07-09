export interface RestoreMediaResponse {
    /**
     * 请求ID。
     * @example `8E70E3F8-E2EE-47BC-4677-379D6F28****`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    IgnoredList: {
        /**
         * 获取失败的媒资ID列表。
         */
        MediaId: string[];
    };
    ForbiddenList: {
        /**
         * 处理失败的媒资ID列表。
         */
        MediaForbiddenReasonDTO: {
            /**
             * 媒资ID。
             * @example `fa10ee70898671edb99f6eb3690d****`
             */
            MediaId: string;
            /**
             * 失败原因。
             * @example `Forbidden.RestoreMedia`
             */
            Reason: string;
        }[];
    };
}
