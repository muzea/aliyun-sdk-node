export interface CreateMountTargetResponse {
    /**
     * 请求ID。
     * @example `70EACC9C-D07A-4A34-ADA4-77506C42****`
     */
    RequestId: string;
    /**
     * IPv4挂载点。
     * @example `174494b666-x****.cn-hangzhou.nas.aliyuncs.com`
     */
    MountTargetDomain: string;
    /**
     * 挂载点信息集合。
     */
    MountTargetExtra: {
        /**
         * IPv4和IPv6双栈挂载点。
         * @example `174494b666-x****.dualstack.cn-hangzhou.nas.aliyuncs.com`
         */
        DualStackMountTargetDomain: string;
    };
}
