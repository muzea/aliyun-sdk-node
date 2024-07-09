export interface ListFileResponse {
    /**
     * 请求ID。
     * @example `FE88BEC8-8F83-408A-9ED3-771C510C705F`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    Paginator: {
        /**
         * 页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 用来标记当前开始读取的位置。置空表示从头开始。
         * > 仅商业版支持该功能
         * @example `eyJhY2NvdW50IjoiMTE2MTQwNTMxMDE0OTY2OCIsImV2ZW50SWQiOiIzMkI3QTE1Mi05NUJFLTUyNkMtQjEyNC00RUYxRDk2RDM4QkEiLCJsb2dJZCI6IjE0LTExNjE0MDUzMTAxNDk2NjgiLCJ0aW1lIjoxNjM1MjEzMzk0MDAwfQ`
         */
        NextToken: string;
    };
    /**
     * 数据列表。
     */
    DataList: {
        /**
         * 文件类型。包含两个保留类型：
         * - directory: 文件夹，此时只有Name字段值有效，为文件夹名称。
         * - only\_in\_oss: 数据不一致的文件，出现的原因是用户上传该文件之后没有完成注册导致的数据不一致现象，一般处理方式是删除重新上传。
         * @example `JPG`
         */
        Type: string;
        /**
         * 文件大小。
         * @example `1000`
         */
        Size: number;
        /**
         * 创建时间。
         * @example `2020-01-16T05:45:33.000Z`
         */
        GmtCreate: string;
        /**
         * 文件下载链接。
         * @example `https://fbpxxx.cdn.bspapp.com/FBPSBVMO-myspace/68dbd670-3823-11ea-bfb9-xxxx.JPG`
         */
        Url: string;
        /**
         * 修改时间。
         * @example `2020-01-16T05:45:33.000Z`
         */
        GmtModified: string;
        /**
         * 文件名称。
         * @example `1579153532001.JPG`
         */
        Name: string;
        /**
         * 唯一标识。
         * @example `c568f23d-a46f-4866-xxxx-142e5eb3e174`
         */
        Id: string;
        /**
         * 鉴权有效时间，单位秒。只有在您开启了CDN配置中的鉴权功能时有效。
         * @example `1800`
         */
        AuthDelta: number;
    }[];
}
