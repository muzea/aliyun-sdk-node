export interface DescribeEstackImageResponse {
    /**
     * 每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `2D69A58F-345C-4FDE-88E4-BF518948xxxx`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 镜像总数。
     * @example `100`
     */
    TotalCount: number;
    ImageList: {
        /**
         * 基础镜像数组。
         */
        ImageListInfo: {
            /**
             * 镜像名称。
             * @example `tensorflow-21.09-tf1-py3.sif`
             */
            ImageName: string;
            /**
             * 镜像大小。
             * @example `65535`
             */
            ImageSize: number;
            /**
             * 镜像最近更新时间。
             * @example `2022-05-05T07:10:55.000Z`
             */
            RecentUpdateTime: string;
            /**
             * 镜像下载链接。
             * @example `http://xxxx.oss-cn-hangzhou.aliyuncs.com/eStackPackage/singularity/tensorflow-21.09-tf1-py3.sif`
             */
            ImageUrl: string;
            /**
             * 镜像类型。
             * @example `singularity`
             */
            ImageType: string;
        }[];
    };
}
