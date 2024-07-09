export interface DescribeComponentListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `B0A255B3-495C-56FB-8B6B-DB073F80388A`
     */
    RequestId: string;
    /**
     * 组件信息，为JSONArray格式。
     * @example `[
        {
            "actions": [
                {
                    "description": "mysql component",
                    "name": "storeIdb",
                    "parameters": [
                        {
                            "description": "update the mysql db",
                            "name": "updateSql",
                            "required": false
                        }
                    ]
                }
            ],
            "basic": {
                "description": "mysq sql component for 5.6",
                "logo": "https://img.alicdn.com/tfs/TB1H89IpH3nBKNjSZFMXXaUSFXa-200-200.svg",
                "name": "Mysql"
            }
        }
    ]`
     */
    Components: string;
}
