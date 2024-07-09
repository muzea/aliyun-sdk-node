export interface ListDetectProcessesResponse {
    /**
     * 错误信息
     * @example `无`
     */
    Message: string;
    /**
     * 请求 ID
     * @example `bf1c45cd-3eee-4e60-b505-2e330bf755d3`
     */
    RequestId: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 数据项
         */
        Items: {
            /**
             * 流程配置正式内容
             * @example `{}`
             */
            Draft: string;
            /**
             * 可访问的文件 URL
             * @example `http://abc.com/123.json`
             */
            FileUrl: string;
            /**
             * 创建时间
             * @example `2020-12-04T14:47:59.000+08:00`
             */
            CreatedAt: string;
            /**
             * 流程配置正式内容的 MD5
             * @example `987d563d38f5aef27feca8702c689bb1`
             */
            Md5: string;
            /**
             * 更新时间
             * @example `2020-12-04T14:48:59.000+08:00`
             */
            UpdatedAt: string;
            /**
             * 保存时间
             * @example `2020-12-04T14:48:59.000+08:00`
             */
            DraftAt: string;
            /**
             * 发布时间
             * @example `2020-12-04T14:48:59.000+08:00`
             */
            ContentAt: string;
            /**
             * 是否更新版本
             * @example `true`
             */
            NewVersion: boolean;
            /**
             * 检测流程名称
             * @example `Android检测流程`
             */
            Name: string;
            /**
             * 流程配置正式内容
             * @example `{}`
             */
            Content: string;
            /**
             * ID
             * @example `0f1c45cd-3eee-4e60-b505-2e330b8755d3`
             */
            Id: string;
            /**
             * 是否已发布 true：已发布：false：未发布
             * @example `True`
             */
            Published: boolean;
            /**
             * 标识本地双录和远程双录（LOCAL 或 REMOTE）
             * @example `REMOTE`
             */
            Type: string;
        }[];
        /**
         * 总页数
         * @example `10`
         */
        TotalPages: number;
        /**
         * 总数
         * @example `100`
         */
        TotalElements: number;
    };
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
}
