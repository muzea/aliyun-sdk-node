export interface GetFileRequest {
    /**
     * 文件名称
     * @example `1597871211794192-1682563156700-402185-1682563123810-bbbbb`
     */
    "name": string;
    /**
     * 共享访问token
     * @example `924cb178-32e6-453a-a553-83289f9f494c`
     */
    "token"?: string;
}
