export interface CreateVpnAttachmentResponse {
    /**
     * 请求ID。
     * @example `88187252-0E26-3C4D-9D1D-32A04454EBBA`
     */
    RequestId: string;
    /**
     * IPsec连接ID。
     * @example `vco-p0wb09rama8qwwgfn****`
     */
    VpnConnectionId: string;
    /**
     * IPsec连接的名称。
     * @example `nametest`
     */
    Name: string;
    /**
     * 创建IPsec连接的时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建IPsec连接时的总时长。
     * @example `1658201810000`
     */
    CreateTime: number;
    /**
     * 当前任务返回的状态码。**200**表示任务成功。
     * @example `200`
     */
    Code: string;
    /**
     * 当前任务是否成功执行。
     * - **true**：已成功执行。
     * - **false**：未能成功执行。
     * @example `true`
     */
    Success: boolean;
    /**
     * 当前任务返回的信息。
     * @example `successful`
     */
    Message: string;
}
