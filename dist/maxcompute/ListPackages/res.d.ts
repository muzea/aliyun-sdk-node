export interface ListPackagesResponse {
    /**
     * 请求id。
     * @example `0bc3b4aa16677927210252786e4cb6`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 创建的package列表。
         */
        createdPackages: {
            /**
             * package名称。
             * @example `packageA`
             */
            name: string;
            /**
             * 创建时间。
             * @example `2022-08-02T02:30:34Z`
             */
            createTime: number;
        }[];
        /**
         * 已安装的package列表。
         */
        installedPackages: {
            /**
             * package名称。
             * @example `packageB`
             */
            name: string;
            /**
             * package所属项目。如果package 是install 的，此参数必填。
             * @example `projectB`
             */
            sourceProject: string;
            /**
             * 状态
             * @example `OK`
             */
            status: string;
            /**
             * 安装时间
             * @example `2022-09-02T02:30:34Z
            `
             */
            installTime: number;
        }[];
    };
}
