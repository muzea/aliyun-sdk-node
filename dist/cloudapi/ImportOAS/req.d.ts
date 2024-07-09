export interface ImportOASRequest {
    /**
     * API分组的ID
     * @example `08ae4aa0f95e4321849ee57f4e0b3077`
     */
    "GroupId": string;
    /**
     * OAS文本内容，或OSS链接
     * @example `swagger: "2.0"
    info:
      version: "1.0.0"
      title: "Swagger Petstore 2.0"
    basePath: "/"
    schemes:
    - "https"
    - "http"
    paths:
      /pet/findByStatus:
        get:
          tags:
          - "pet"
          summary: "Finds Pets by status"
          operationId: "findPetsByStatus"
          parameters:
          - name: "status"
            in: "query"
            required: true
            type: "array"
            items:
              type: "string"
              enum:
              - "available"
              - "pending"
              - "sold"
              default: "available"
            collectionFormat: "multi"
          responses:
            "200":
              description: "successful operation"
              schema:
                type: "array"
                items:
                  $ref: "#/definitions/Pet"
            "400":
              description: "Invalid status value"
    definitions:
      Category:
        type: "object"
        properties:
          id:
            type: "integer"
            format: "int64"
          name:
            type: "string"
      Tag:
        type: "object"
        properties:
          id:
            type: "integer"
            format: "int64"
          name:
            type: "string"
      Pet:
        type: "object"
        required:
        - "name"
        - "photoUrls"
        properties:
          id:
            type: "integer"
            format: "int64"
          category:
            $ref: "#/definitions/Category"
          name:
            type: "string"
            example: "doggie"
          photoUrls:
            type: "array"
            items:
              type: "string"
          tags:
            type: "array"
            items:
              $ref: "#/definitions/Tag"
          status:
            type: "string"
            description: "pet status in the store"
            enum:
            - "available"
            - "pending"
            - "sold"`
     */
    "Data": string;
    /**
     * 是否覆盖现有API。
     * 覆盖检测条件为：API的HTTP请求类型+后端请求路径相同。
     * @example `true`
     */
    "Overwrite": boolean;
    /**
     * 忽略警告信息
     * @example `true`
     */
    "IgnoreWarning"?: boolean;
    /**
     * 跳过预检查，进行导入
     * @example `true`
     */
    "SkipDryRun"?: boolean;
    /**
     * OAS版本信息
     * @example `OAS2`
     */
    "OASVersion"?: string;
    /**
     * 后端服务名称
     * @example `testBackendService`
     */
    "BackendName"?: string;
    /**
     * API安全认证类型，目前可以取值：
     * - **APP**：只允许已授权的APP调用
     * - **ANONYMOUS**：允许匿名调用，设置为允许匿名调用需要注意：
     *      - 任何能够获取该API服务信息的人，都将能够调用该API。网关不会对调用者做身份认证，也无法设置按用户的流量控制，若开放该API请设置好按API的流量控制。
     * @example `APP`
     */
    "AuthType"?: string;
    /**
     * 入参请求的模式，取值为：
     * - MAPPING：入参映射（过滤未知参数）
     * - PASSTHROUGH：入参透传
     * @example `PASSTHROUGH`
     */
    "RequestMode"?: string;
}
