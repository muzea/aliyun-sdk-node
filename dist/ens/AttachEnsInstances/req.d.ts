export interface AttachEnsInstancesRequest {
    /**
     * 实例ID，仅支持传单个ID。
     * @example `testInstacneId`
     */
    "InstanceId": string;
    /**
     * 在实例上执行的命令，使用Base64、UTF-8编码。
     * @example `wget d2dldCBodHRwOi8vYWxpYWNzLWs4cy1jbxxxx`
     */
    "Scripts": string;
}
