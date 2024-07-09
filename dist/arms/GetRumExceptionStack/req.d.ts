export interface GetRumExceptionStackRequest {
    /**
     * 应用ID。
     * @example `atxxxxzkcf@d8deedfa9bf****`
     */
    "Pid": string;
    /**
     * 错误堆栈信息，JSON列表格式，列表元素包括call_stack.info、call_stack.thread.name和call_stack.thread.id三个字段，分别代表堆栈信息、线程名称和线程id，同SLS的logstore-rum中的exception.stack字段完全一致。
     * @example `[
    {
        "call_stack.info": "libsystem_kernel.dylib  0x00000001f1ce9178 0x00000001f1ce8000 + 4472\r\nlibsystem_kernel.dylib  0x00000001f1ce8f10 0x00000001f1ce8000 + 3856\r\nlibsystem_kernel.dylib  0x00000001f1ced718 0x00000001f1ce8000 + 22296\r\nAlibabaCloudRUM  0x0000000106711af4 0x0000000106660000 + 727796\r\nlibsystem_pthread.dylib  0x00000002146744d4 0x0000000214672000 + 9428",
        "call_stack.thread.name": "#3 BRSCrash Exception Handler (Secondary)",
        "call_stack.thread.id": "16643"
      }
    ]`
     */
    "ExceptionStack"?: string;
    /**
     * Binary Images，表示在崩溃时装载到进程地址空间的所有可执行文件。
     * @example `iOSDemo:arm64%3B1489F4D3-6DE2-300C-90E9-E1B869675351%3B0x0000000104064000\nAlibabaCloudRUM:arm64%3BAB7B3A8E-6CEE-325D-BCBB-8DA50E61804F%3B0x0000000106660000\nlibdispatch.dylib:arm`
     */
    "ExceptionBinaryImages"?: string;
    /**
     * 异常线程ID。
     * @example `16643`
     */
    "ExceptionThreadId"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 文件类型：
     * - source-map：SourceMap文件
     * - mapping：安卓符号表文件
     * - dsym：iOS的dSYM文件
     * @example `source-map`
     */
    "SourcemapType"?: string;
}
