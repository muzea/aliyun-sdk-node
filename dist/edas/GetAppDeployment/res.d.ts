export interface GetAppDeploymentResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 应用Deployment信息，格式为JSON格式字符串。
     * @example ` {"metadata":{"name":"oambuild-group*","namespace":"default","selfLink":"/apis/apps/v1/namespaces/default/deployments/oambuil*","uid":"*-afc0-436e-9949-fb01994a9b63","resourceVersion":"969614832","generation":2,"creationTimestamp":"2021-04-06T11:38:46Z","labels":{"edas-domain":"edas-admin","edas.aliyun.oam.com/rollout-name":"oambuild-group-1","edas.aliyun.oam.com/rollout-namespace":"default","edas.aliyun.oam.com/rollout-revision":"3","edas.appid":"fc5e0f54-*-4cab-91a0-b7becb1f6174","edas.controlplane":"edas-oam","edas.oam.acname":"oambuild"...`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `03FD1520-0FD6-436A-****-265318D7****`
     */
    RequestId: string;
}
