export interface DescribeRecoveryPlanResponse {
    /**
     * 恢复计划状态。其中，
     * - **creating**：创建中
     * - **updating**：更新中
     * - **deleting**：删除中
     * - **failed**：失败
     * - **init**：已初始化
     * - **running**：执行中
     * @example `init`
     */
    Status: string;
    /**
     * 恢复计划的方向，支持**forward**。
     * @example `forward`
     */
    Direction: string;
    /**
     * 请求ID。
     * @example `6F3884EC-AECB-52EF-AFE3-BC13A9688DEB`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 恢复计划名称。
     * @example `test`
     */
    Name: string;
    /**
     * 恢复计划详情。
     * @example `{
        "groups": [
            {
                "name": "Group-1",
                "id": "Group-1",
                "servers": [
                    {
                        "name": "sr-xxxxxxxxxxxxxxxxxx",
                        "serverId": "sr-xxxxxxxxxxxxxxxxxx",
                        "testFailoverAction": {
                            "eipAddressId": "",
                            "recoveryPostScriptContent": "",
                            "recoveryPostScriptType": "POWERSHELL",
                            "recoveryInstanceName": "HDR_Recovery-sr-xxxxxxxxxxxxxxxxxx-tfo",
                            "recoveryCpu": 2,
                            "recoveryMemory": 4294967296,
                            "recoveryUseEssd": false,
                            "recoveryUseSsd": false,
                            "recoveryReserveIp": false,
                            "recoveryUseDhcp": true,
                            "recoveryIpAddress": "",
                            "recoveryNetwork": "vsw-xxxxxxxxxxxxxxxxxx"
                        },
                        "testCleanupAction": {},
                        "changeRecoveryPointAction": {
                            "eipAddressId": "",
                            "recoveryPostScriptContent": "",
                            "recoveryPostScriptType": "POWERSHELL",
                            "recoveryInstanceName": "HDR_Recovery-sr-xxxxxxxxxxxxxxxxxx-cpr",
                            "recoveryCpu": 2,
                            "recoveryMemory": 4294967296,
                            "recoveryUseEssd": false,
                            "recoveryUseSsd": false,
                            "recoveryReserveIp": false,
                            "recoveryUseDhcp": true,
                            "recoveryIpAddress": "",
                            "recoveryNetwork": "vsw-xxxxxxxxxxxxxxxxxx"
                        },
                        "forcedFailoverAction": {
                            "eipAddressId": "",
                            "recoveryPostScriptContent": "",
                            "recoveryPostScriptType": "POWERSHELL",
                            "recoveryInstanceName": "HDR_Recovery-sr-xxxxxxxxxxxxxxxxxx-ffo",
                            "recoveryCpu": 2,
                            "recoveryMemory": 4294967296,
                            "recoveryUseEssd": false,
                            "recoveryUseSsd": false,
                            "recoveryReserveIp": false,
                            "recoveryUseDhcp": true,
                            "recoveryIpAddress": "",
                            "recoveryNetwork": "vsw-xxxxxxxxxxxxxxxxxx"
                        }
                    }
                ]
            }
        ]
    }`
     */
    Content: string;
    /**
     * 恢复计划ID。
     * @example `rp-xxxxxxxxxxxxxxxxxx`
     */
    RecoveryPlanId: string;
}
