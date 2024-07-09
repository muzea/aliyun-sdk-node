export interface CreateVpnConnectionResponse {
    /**
     * 请求ID。
     * @example `082AD562-B8DB-4BB2-861F-DA1FCA01FD76`
     */
    RequestId: string;
    /**
     * IPsec连接的ID。
     * @example `vco-bp15oes1py4i6****`
     */
    VpnConnectionId: string;
    /**
     * IPsec连接的名称。
     * @example `test`
     */
    Name: string;
    /**
     * IPsec连接的创建时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建IPsec连接时的总时长。
     * @example `1544666102000`
     */
    CreateTime: number;
}
