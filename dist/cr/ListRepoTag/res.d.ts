export interface ListRepoTagResponse {
    /**
     * 请求ID
     * @example `031572FA-7D8F-4C05-B790-1071E0E05DE6`
     */
    RequestId: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 页号
     * @example `1`
     */
    PageNo: number;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 页大小
     * @example `30`
     */
    PageSize: number;
    /**
     * 总数量
     * @example `1`
     */
    TotalCount: string;
    /**
     * 镜像列表
     */
    Images: {
        /**
         * 状态
         * @example `NORMAL`
         */
        Status: string;
        /**
         * 镜像大小，单位 Byte
         * @example `27107966`
         */
        ImageSize: number;
        /**
         * 镜像创建时间
         * @example `1572839125000`
         */
        ImageCreate: string;
        /**
         * digest值
         * @example `67bfbcc12b67936ec7f867927817cbb071832b873dbcaed312a1930ba5f1****`
         */
        Digest: string;
        /**
         * 镜像更新时间
         * @example `1572875608000`
         */
        ImageUpdate: string;
        /**
         * 镜像TAG
         * @example `v0.1`
         */
        Tag: string;
        /**
         * 镜像ID
         * @example `45023655bf39c382e26a8607d057c27871dee163c1ecf48cc1ebf2a1****`
         */
        ImageId: string;
    }[];
}
