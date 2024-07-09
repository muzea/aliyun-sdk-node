export interface DescriberPython3ScriptLogsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D22D8A0C-6E86-57B2-A142-929184122AB1`
     */
    RequestId: string;
    /**
     * python3的运行日志。
     * @example `{
        "logs": [
            {
                "message": "function input is {}"
            }
        ]
    }`
     */
    RunResult: string;
}
