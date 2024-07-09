export interface DescribeImagesResponse {
    /**
     * 当前分页包含多少条目。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `XXXX-XXXX`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 镜像资源总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 镜像信息Images组成的集合。
     */
    Images: {
        /**
         * 镜像状态：
         * * Missing
         * * Available
         * * Creating
         * * UnAvailable
         * * CreateFailed
         * @example `Available`
         */
        Status: string;
        /**
         * 镜像类型：
         * * system
         * * custom
         * @example `system`
         */
        ImageType: string;
        /**
         * 镜像完成的进度，单位为百分比。
         * @example `100%`
         */
        Progress: string;
        /**
         * 镜像大小，单位是 GB。
         * @example `40`
         */
        Size: number;
        /**
         * 镜像的创建时间。
         * @example `Mon May 27 13:33:42 CST 2019`
         */
        CreateTime: string;
        /**
         * 镜像名称。
         * @example `windows 2016 标准版 citrix 1903`
         */
        Name: string;
        /**
         * 镜像 id。
         * @example `m-bp125mb261tmk6tqvoni`
         */
        ImageId: string;
        /**
         * 产品代码。
         * 如果返回该参数，则表示该镜像是基于镜像市场的镜像制作而成。
         * @example `cmjj00042097`
         */
        ProductCode: string;
    }[];
}
