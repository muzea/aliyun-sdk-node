export interface GetStatisticsRecordsByFeeIdResponse {
    /**
     * requestId
     * @example `CAD43A24-D34C-5848-BEB0-3D184F6687B1`
     */
    RequestId: string;
    /**
     * code
     * @example `OK`
     */
    Code: string;
    /**
     * 提示
     * @example `-`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 设备id
         * @example `7f3dfb9aa0dd0261`
         */
        DeviceId: string;
        /**
         * 租户id
         * @example `1`
         */
        TenantId: number;
        /**
         * appid
         * @example `12`
         */
        AppId: number;
        /**
         * 部门id
         * @example `12`
         */
        DepartmentId: number;
        /**
         * 终端设备类型，0:Android，1：iOS
         * @example `0`
         */
        DeviceType: number;
        /**
         * 创建时间
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        CreatedAt: string;
        /**
         * 更新时间
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        UpdatedAt: string;
        /**
         * 开始检测时间，时间格式yyyy-MM-dd HH:mm:ss
         * @example `2022-05-23 10:33:12`
         */
        BeginAt: string;
        /**
         * 结束检测时间，时间格式yyyy-MM-dd HH:mm:ss
         * @example `2022-03-24 11:39:46`
         */
        EndAt: string;
        /**
         * 时间段
         * @example `2020050811`
         */
        Hour: number;
        /**
         * 检测时长，s
         * @example `1200`
         */
        DetectionDuration: number;
        /**
         * 计费时长，min
         * @example `12`
         */
        ChargeDuration: number;
        /**
         * 类型：remote（远程双录），local（本地双录）
         * @example `REMOTE`
         */
        Type: string;
        /**
         * 对账 ID
         * @example `ff1d7783-e087-4d62-92df-3a163eca7c07`
         */
        FeeId: string;
    }[];
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: number;
    /**
     * 错误列表
     */
    Errors: {
        /**
         * 错误 ID
         * @example `-`
         */
        Field: string;
        /**
         * 错误消息
         * @example `-`
         */
        Message: string;
    }[];
}
