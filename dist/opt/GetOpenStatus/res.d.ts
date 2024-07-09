export interface GetOpenStatusResponse {
    /**
     * 结果状态码
     * @example `0`
     */
    Code: number;
    /**
     * 结果消息
     * @example `success`
     */
    Message: string;
    /**
     * 详细数据，mpStatus：数学规划服务开通状态，1开通，0未开通；pk：云账号id；parentPk：父账号id。
     * @example `{"gmtModified":"2021-07-27T04:00:00.000+00:00","mpStatus":1,"id":11,"pk":"1084126944995576","gmtCreate":"2021-07-27T04:00:00.000+00:00","parentPk":"1084126944995576"}`
     */
    Data: any;
    /**
     * 请求唯一标识
     * @example `0EB-FCAC-1B78-BBB8-500ED951E9EB`
     */
    RequestId: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    Success: boolean;
}
