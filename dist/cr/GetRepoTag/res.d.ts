export interface GetRepoTagResponse {
    /**
     * 状态，取值：
     * - `NORMAL`：正常镜像
     * - `DELETING`：镜像删除中
     * @example `NORMAL`
     */
    Status: string;
    /**
     * 镜像创建时间
     * @example `1572839125000`
     */
    ImageCreate: number;
    /**
     * 镜像大小
     * @example `27107966`
     */
    ImageSize: number;
    /**
     * 请求ID
     * @example `031572FA-7D8F-4C05-B790-1071E0E05DE6`
     */
    RequestId: string;
    /**
     * digest值
     * @example `67bfbcc12b67936ec7f867927817cbb071832b873dbcaed312a1930ba5f1****`
     */
    Digest: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 镜像更新时间
     * @example `1572875608000`
     */
    ImageUpdate: number;
    /**
     * 仓库版本
     * @example `1.0`
     */
    Tag: string;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 镜像ID
     * @example `45023655bf39c382e26a8607d057c27871dee163c1ecf48cc1ebf2a1****`
     */
    ImageId: string;
}
