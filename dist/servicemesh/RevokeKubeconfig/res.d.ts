export interface RevokeKubeconfigResponse {
    /**
     * 请求ID
     * @example `7CF71C8B-79DD-150F-929E-267C51C5E311`
     */
    RequestId: string;
    /**
     * 吊销后生成的新Kubeconfig
     * @example `apiVersion: v1 clusters: - cluster:     server: https://121.**.**.**:6443     certificate-authority-data: *****   name: kubernetes contexts: - context:     cluster: kubernetes     user: "*****"   name: ***** current-context: ***** kind: Config preferences: {} users: - name: "*****"   user:     client-certificate-data: *****     client-key-data: *****`
     */
    Kubeconfig: string;
}
