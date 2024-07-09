export interface DeleteAccountRequest {
    /**
     * 待删除的静态用户名。
     * @example `MjphbXFwLWNuLXVxbTJ6cjc2djAwMzpMVEFJNX*******ZNMWVSWnRFSjZ2Zm8=`
     */
    "UserName": string;
    /**
     * 待删除的静态用户名密码的创建时间戳。单位：毫秒。
     * 您可以调用[ListAccounts](~~472730~~)接口查看。
     * @example `1671175303522`
     */
    "CreateTimestamp": number;
}
