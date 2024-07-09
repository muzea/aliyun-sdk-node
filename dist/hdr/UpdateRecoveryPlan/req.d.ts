export interface UpdateRecoveryPlanRequest {
    /**
     * 恢复计划ID。
     * @example `rp-xxxxxxxxxxxxxxxx`
     */
    "RecoveryPlanId"?: string;
    /**
     * 恢复计划名称。
     * @example `test-1`
     */
    "Name"?: string;
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
    "Content"?: string;
}
