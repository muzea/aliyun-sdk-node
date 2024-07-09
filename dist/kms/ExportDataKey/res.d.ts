export interface ExportDataKeyResponse {
    /**
     * 用于解密传入的数据密钥密文的密钥版本标识符。
     * @example `2ab1a983-7072-4bbc-a582-584b5bd8****`
     */
    KeyVersionId: string;
    /**
     * 解密传入的数据密钥密文使用的主密钥ID。
     * 主密钥的全局唯一标识符。
     * @example `202b9877-5a25-46e3-a763-e20791b5****`
     */
    KeyId: string;
    /**
     * 请求ID。
     * @example `4bd560a1-729e-45f1-a3d9-b2a33d61046b`
     */
    RequestId: string;
    /**
     * 公钥加密保护导出的数据密钥。
     * @example `BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVs*******`
     */
    ExportedDataKey: string;
}
