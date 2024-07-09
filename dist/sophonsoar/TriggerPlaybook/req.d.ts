export interface TriggerPlaybookRequest {
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `2a687089-d4dd-47d4-9709-xxxxxxxx`
     */
    "PlaybookUuid": string;
    /**
     * 剧本的输入参数。
     * @example `{
        "input1": "xx.xx.xx.xx",
        "input2": "7d"
    }
    `
     */
    "InputParam": string;
}
