export interface RunPython3ScriptResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F210521C-D9BF-5264-8369-83EDDC617DB0`
     */
    RequestId: string;
    /**
     * 运行脚本的结果数据。
     * @example `{
        "requestUuid": "fe240b98-27b1-4a36-aec1-550b894318d9",
        "content": {
            "resultData": [],
            "success": true
        }
    }`
     */
    RunResult: string;
}
