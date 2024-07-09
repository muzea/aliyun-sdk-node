export interface DescribeExportImageInfoResponse {
    Images: {
        /**
         * 返回数据列表，详见返回示例（JSON格式）Images对象数组。
         */
        Image: {
            /**
             * 镜像系统架构类型。可能值：**x86_64**。
             * @example `x86_64`
             */
            Architecture: string;
            /**
             * 镜像的创建时间。
             * @example `2017-12-08T12:10:03Z`
             */
            CreationTime: string;
            /**
             * 镜像导出URL。
             * @example `https://user_defined_bucket.oss-cn-beijing.aliyuncs.com/m-xxxxxxxxx1.qcow2`
             */
            ExportedImageURL: string;
            /**
             * 镜像导出状态，如下所示：
             * -  Exporting：导出中。
             * -  Exported：已导出。
             * -  ExportError：镜像导出发生异常。
             * -  Unexported：未导出。
             * @example `Exported`
             */
            ImageExportStatus: string;
            /**
             * 镜像ID。
             * @example `m-xxxxxxxxx1`
             */
            ImageId: string;
            /**
             * 镜像名称。
             * @example `m-xxxxxxxxx1`
             */
            ImageName: string;
            /**
             * 镜像所有者别名。可能值：
             * - system：公共镜像
             * - self：您的自定义镜像
             * @example `system`
             */
            ImageOwnerAlias: string;
            /**
             * 操作系统平台。
             * @example `centos`
             */
            Platform: string;
        }[];
    };
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 当前分页包含多少条目。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 列表条条目数。
     * @example `13`
     */
    TotalCount: number;
}
