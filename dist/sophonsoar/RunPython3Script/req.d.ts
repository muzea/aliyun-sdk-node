export interface RunPython3ScriptRequest {
    /**
     * python3的脚本。
     * @example `import logging
    def execute (params):
      #ip = params['ip']
      #logging.info("enter execute,ip is "+ip)
      success=True
      message='OK'
      data=[]
      return (success,message,data)`
     */
    "PythonScript"?: string;
    /**
     * python3脚本的入参。
     * @example `{
        "input1": "xx.xx.xx.xx",
        "input2": "7d"
    }`
     */
    "Params"?: string;
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `8baa6cff-319e-4ede-97bc-xxxxxxx`
     */
    "PlaybookUuid"?: string;
    /**
     * 剧本的节点名称。
     * @example `python3_3`
     */
    "NodeName"?: string;
}
