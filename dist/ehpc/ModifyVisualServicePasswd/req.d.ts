export interface ModifyVisualServicePasswdRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-jeJki6****`
     */
    "ClusterId": string;
    /**
     * 集群的用户名。当前仅支持root用户。
     * @example `root`
     */
    "RunasUser": string;
    /**
     * RunasUser用户当前的密码。
     * @example `2145****`
     */
    "RunasUserPassword": string;
    /**
     * 修改后的VNC远程可视化服务的连接密码。长度为6个字符，必须同时包含英文字母和数字。
     * >请务必使用HTTPS协议调用API以避免可能发生的密码泄露。
     * @example `1254****`
     */
    "Passwd": string;
}
