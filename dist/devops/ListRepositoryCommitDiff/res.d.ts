export interface ListRepositoryCommitDiffResponse {
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 请求ID
     * @example `AB270BBA-EFB1-5773-B3DC-07CD036F7352`
     */
    requestId: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 响应结果
     */
    result: {
        /**
         * 旧文件的git object id
         * @example `0000000000000000000000000000000000000000`
         */
        oldId: string;
        /**
         * 新文件的git object id
         * @example `6c268061a546378276559c713d0ad377d4dsjfh`
         */
        newId: string;
        /**
         * 新文件是否是大文件（LFS）
         * @example `true`
         */
        isNewLfs: boolean;
        /**
         * 旧文件是否是大文件（LFS）
         * @example `true`
         */
        isOldLfs: boolean;
        /**
         * diff内容
         * @example `--- /dev/null\n+++ b/src/test/java/com/aliyun/codeupdemo/CodeupDemoApplicationTests.java\n@@ -0,0 +1,13 @@\n+package com.aliyun.codeupdemo;\n+\n+import org.junit.jupiter.api.Test;\n+import org.springframework.boot.test.context.SpringBootTest;\n+\n+@SpringBootTest\n+class CodeupDemoApplicationTest {\n+\n+ @Test\n+ void contextLoads() {\n+ }\n+\n+}\n`
         */
        diff: string;
        /**
         * 新文件路径
         * @example `src/test/java/com/aliyun/codeupdemo/CodeupDemoApplicationTests.java`
         */
        newPath: string;
        /**
         * 旧文件路径
         * @example `src/test/java/com/aliyun/codeupExample/CodeupDemoApplicationTests.java`
         */
        oldPath: string;
        /**
         * 旧的文件模式标识，包含文件类型、权限等信息
         * @example `100644`
         */
        aMode: string;
        /**
         * 新的文件模式标识，包含文件类型、权限等信息
         * @example `100755`
         */
        bMode: string;
        /**
         * 是否是新增文件
         * @example `false`
         */
        newFile: boolean;
        /**
         * 是否是重命名文件
         * @example `false`
         */
        renamedFile: boolean;
        /**
         * 是否是删除文件
         * @example `false`
         */
        deletedFile: boolean;
        /**
         * 是否二进制文件
         * @example `false`
         */
        isBinary: boolean;
    }[];
}
