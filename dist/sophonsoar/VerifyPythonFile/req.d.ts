export interface VerifyPythonFileRequest {
    /**
     * 要校验的python代码片段。
     * @example `import logging
    def execute (params):
      success=True
      message='OK'
      data=[]
      return (success,message,data)`
     */
    "Content": string;
}
