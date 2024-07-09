export interface BatchRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 请求的资源，支持的资源类型包括：
         * - file（文件）
         * - drive（个人/团队云盘）
         * - user（用户）
         * - group（群组）
         * - membership（群组成员）
         * - share\_link（分享）
         * - async\_task（异步任务）
         * @example `file`
         */
        resource: string;
        /**
         * 子请求合集
         * 子请求的数量，有效范围是[1,100]
         */
        requests: {
            /**
             * 子请求 id，用于request 和 response关联， 不允许重复
             * @example `93433894994ad2e1`
             */
            id: string;
            /**
             * 子请求的方法，支持：
             * - POST
             * - GET
             * - PUT
             * - DELETE
             * - HEAD
             * @example `POST`
             */
            method: string;
            /**
             * url 子请求的api path路径， 支持：
             * - /file/get（获取文件详情）
             * - /file/update（修改文件信息）
             * - /file/search（搜索文件）
             * - /file/copy（复制文件或文件夹）
             * - /file/move（移动文件或文件夹）
             * - /file/delete（删除文件或文件夹）
             * - /file/get_download_url（获取文件下载地址）
             * - /file/get_share_link_download_url（获取分享下载地址）
             * - /recyclebin/trash（放入回收站）
             * - /recyclebin/restore（恢复文件或文件夹）
             * - /file/put_usertags（设置用户标签）
             * - /file/delete_usertags（删除用户标签）
             * - /drive/get（获取空间信息）
             * - /user/get（获取用户信息）
             * - /group/get（获取群组信息）
             * - /share_link/create（创建分享）
             * - /share_link/update（修改分享）
             * - /share_link/cancel（取消分享）
             * - /share_link/list（列举分享）
             * - /share_link/get（获取分享信息）
             * - /share_link/get_share_token（获取分享令牌）
             * - /async_task/get（获取异步任务信息）
             * @example `/file/get`
             */
            url: string;
            /**
             * 子请求的请求参数JSON字符串，可参考相应子请求API文档
             * 当指定了body必须传headers："Content-Type" 对应的类型，目前子请求入参是"application/json"
             */
            body: any;
            /**
             * 子请求的请求头，表示body传入数据的类型
             */
            headers: any;
        }[];
    };
}
