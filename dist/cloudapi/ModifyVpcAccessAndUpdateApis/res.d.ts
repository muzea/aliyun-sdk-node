export interface ModifyVpcAccessAndUpdateApisResponse {
    /**
     * 异步任务ID
     * >
     * > - 如果关联API被刷新，可使用任务ID，调用**DescribeUpdateVpcInfoTask**接口，查询更新结果。
     * @example `7b6d0cb72b2e4215b0129f675c889746`
     */
    OperationId: string;
    /**
     * 请求id
     * @example `C2CEC6EA-EEBA-5FD6-8BD9-2CF01980FE39`
     */
    RequestId: string;
}
