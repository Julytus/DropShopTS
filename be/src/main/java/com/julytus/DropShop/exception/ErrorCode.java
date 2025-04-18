package com.julytus.DropShop.exception;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public enum ErrorCode {

    CHAPTER_NOT_FOUND(404, "chapter not found", HttpStatus.NOT_FOUND),
    USER_EXISTED(400, "User existed", HttpStatus.BAD_REQUEST),
    USER_NOT_EXISTED(400, "User not existed", HttpStatus.BAD_REQUEST),
    UNAUTHORIZED(401, "Unauthorized", HttpStatus.UNAUTHORIZED),
    ACCESS_DENIED(403, "Access denied", HttpStatus.FORBIDDEN),
    TOKEN_INVALID(400, "Token invalid", HttpStatus.BAD_REQUEST),
    CATEGORY_NOT_FOUND(404, "Category not found", HttpStatus.NOT_FOUND),
    ORDER_NOT_FOUND(404, "Order not found", HttpStatus.NOT_FOUND),
    COLOR_NOT_FOUND(404, "Color not found", HttpStatus.NOT_FOUND),
    SIZE_NOT_FOUND(404, "Size not found", HttpStatus.NOT_FOUND),
    NAME_EXISTED(404, "Name existed", HttpStatus.BAD_REQUEST),
    PRODUCT_NOT_FOUND(404, "Product not found", HttpStatus.NOT_FOUND),
    ROLE_EXISTED(400, "PredefinedRole existed", HttpStatus.BAD_REQUEST),
    ROLE_NOT_EXISTED(400, "PredefinedRole not existed", HttpStatus.BAD_REQUEST),
    REFRESH_TOKEN_EXPIRED(401, "Refresh token expired", HttpStatus.BAD_REQUEST),
    REFRESH_TOKEN_INVALID(401, "Refresh token invalid", HttpStatus.BAD_REQUEST),
    TOKEN_BLACK_LIST(400, "Token black list", HttpStatus.BAD_REQUEST),
    SIGN_OUT_FAILED(400, "Sign out failed", HttpStatus.BAD_REQUEST),
    JWT_EXPIRED(401, "JWT token has expired", HttpStatus.UNAUTHORIZED),
    JWT_MALFORMED(400, "JWT token is malformed", HttpStatus.BAD_REQUEST),
    JWT_SIGNATURE_INVALID(401, "JWT signature is invalid", HttpStatus.UNAUTHORIZED),
    JWT_UNSUPPORTED(400, "JWT token is unsupported", HttpStatus.BAD_REQUEST),
    JWT_CLAIMS_EMPTY(400, "JWT claims string is empty", HttpStatus.BAD_REQUEST),
    FILE_UPLOAD_FAILED(400, "Failed to upload file", HttpStatus.BAD_REQUEST),
    FILE_INVALID_TYPE(400, "Invalid file type", HttpStatus.BAD_REQUEST),
    FILE_TOO_LARGE(400, "File size exceeds maximum limit", HttpStatus.BAD_REQUEST),
    FILE_EMPTY(400, "File is empty", HttpStatus.BAD_REQUEST),
    STORAGE_INITIALIZATION_FAILED(500, "Failed to initialize storage system, " +
            "Make sure MinIO, MySql is started", HttpStatus.INTERNAL_SERVER_ERROR),
    ;

    private final int code;
    private final String message;
    private final HttpStatus httpStatus;

    ErrorCode(int code, String message, HttpStatus httpStatus) {
        this.code = code;
        this.message = message;
        this.httpStatus = httpStatus;
    }
}
