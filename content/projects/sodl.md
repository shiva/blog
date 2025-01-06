---
title: Structed Object Definition Language (SODL)
tags:
  - projects
  - language
  - programming
  - object definition
  - SODL
date: '2025-01-05'
description: Structed Object Definition Language (SODL)
---

## Introduction

The Structured Object Definition Language (SODL) is a domain-specific language designed for defining data structures, relationships, and constraints in a clear and organized manner. Files written in SODL use the `.sodl` extension, reflecting the language's focus on structured object definitions. SODL provides a rich set of constructs that allow developers to model complex data relationships while maintaining type safety and data integrity.

The name "Structured Object Definition Language" reflects the language's core purpose: it provides a structured way to define objects and their relationships in a data model. The "Structured" aspect emphasizes its systematic approach to organizing data definitions, while "Object Definition" highlights its primary focus on defining data objects and their properties.

## When to Choose SODL

SODL is particularly well-suited for:

1. Complex data models with intricate relationships
2. Systems requiring strong data validation
3. Projects needing clear documentation of data structures
4. Applications with strict type safety requirements
5. Systems with complex business rules around data integrity

The language's focus on structured definitions makes it especially valuable in enterprise environments where data modeling clarity and maintainability are crucial.

## Core Concepts

### Basic Building Blocks

SODL uses several fundamental building blocks to construct data models:

1. **Basic Types**: The language supports various numeric types (uint8 through uint64, int8 through int64, float32, float64), strings, booleans, and timestamps. These serve as the foundation for more complex data structures.

2. **Complex Types**: SODL supports fixed-size lists (`[Type; size]`) and TLV (Type-Length-Value) structures (`tlv<Type>`), allowing for more sophisticated data organization.

3. **User-Defined Types**: Developers can create custom types using several constructs, which we'll explore in detail.

### Import System

SODL features a modular import system that allows code reuse and organization. The syntax supports:

```sodl
import { UUID, Timestamp } from "common_types"
```

This system allows for:
- Selective imports with specific type names
- Wildcard imports using `*`
- Import aliasing for naming flexibility

## Core Constructs

### 1. Enums

Enums provide a way to define a set of named constants. Each enum value can optionally have an explicit integer value:

```sodl
enum UserRole {
    Admin = 1,
    Editor = 2,
    Viewer = 3,
    Guest = 4
}
```

### 2. Unions

Unions represent a type that could be one of several possibilities. They're particularly useful for modeling variable data types:

```sodl
union ContactMethod {
    Email,
    Phone,
    Address
}
```

### 3. Structs

Structs are collections of fields, each with its own type. They're used to create compound data types:

```sodl
struct Address {
    street: string,
    city: string,
    state: string,
    zipCode: string,
    country: string
}
```

### 4. Keys

Keys define unique identifiers and indexing structures. They can include multiple fields and metadata:

```sodl
key UserProfile {
    userId: type = UUID,
    username: type = string,
    email: type = string
}
```

### 5. Objects

Objects are the most complex and feature-rich construct in SODL. They represent entities with various properties and constraints:

```sodl
object UserAccount {
    userId: type = UUID, assigned = counter, required, key;
    username: type = string, required;
    email: type = string, required;
    profile: type = UserProfile;
}
```

Object fields can have several properties:
- `required`: Field must have a value
- `key`: Field is part of the object's key
- `assigned`: Specifies automatic value assignment
- `default`: Provides a default value
- `optional`: Field may be omitted

### 6. KeyMaps

KeyMaps define relationships between different objects using their keys:

```sodl
keymap UserProfile:UserAccount {
    username -> username,
    email -> email
}, primary, name = "ProfileToAccount";
```

KeyMaps support properties like:
- `primary`: Indicates a primary relationship
- `name`: Provides a descriptive name
- `cascadeDelete`: Specifies deletion behavior

## Advanced Features

### Type Constraints

SODL supports advanced type constraints:
- Range constraints: `range(min, max)`
- Pattern matching: `pattern = "regex_pattern"`

### Strict Mode

Fields can be marked as strict with explicit values:
```sodl
field: string, strict = "specific_value"
```

## Common Patterns and Best Practices

1. **Hierarchical Data Modeling**
   Create clear hierarchies using objects and relationships. The example shows this with UserAccount and UserPreferences.

2. **Relationship Modeling**
   Use KeyMaps to establish clear relationships between entities. The example demonstrates this with organization membership.

3. **Type Safety**
   Leverage the type system to ensure data integrity. The example uses specific types like UUID and Timestamp.

## Gaps in the Example

The provided example could be enhanced with:

1. **Pattern Constraints**
   The example doesn't show usage of pattern matching for strings (e.g., email validation).

2. **Range Constraints**
   Numeric range constraints aren't demonstrated (e.g., age limits).

3. **TLV Types**
   The example doesn't utilize TLV types, which could be useful for variable-length data.

4. **Nested Complex Types**
   While it shows arrays of structs, it doesn't demonstrate nested arrays or more complex type combinations.

Here's an example of what these missing features might look like:

```sodl
object EnhancedUserProfile {
    email: string, pattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
    age: uint8, range(13, 120);
    metadata: tlv<string>;
    skills: [string; 10];
    certifications: [[string; 2]; 5];  // Array of certification pairs
}
```

## Common Pitfalls to Avoid

1. **Overuse of Optional Fields**
   While optional fields provide flexibility, overusing them can lead to data inconsistency.

2. **Complex Key Structures**
   Keep key structures simple and focused on natural identifying properties.

3. **Missing Relationships**
   Ensure all necessary relationships are properly modeled using KeyMaps.

## Comparison with Other Data Definition Languages

### SODL vs Protocol Buffers (protobuf)

1. **Type System**
   - SODL: Provides more precise numeric types (uint8-uint64, int8-int64) and built-in support for timestamps
   - Protobuf: Simpler type system with fewer numeric types, requires manual timestamp handling

2. **Relationship Modeling**
   - SODL: First-class support for relationships through KeyMaps
   - Protobuf: Relationships must be modeled through message references

3. **Validation**
   - SODL: Built-in support for range constraints and pattern matching
   - Protobuf: Limited validation capabilities, requires additional tooling

4. **Schema Evolution**
   - SODL: Explicit strict/optional field marking
   - Protobuf: Built-in versioning through field numbers

### SODL vs JSON Schema

1. **Structure**
   - SODL: More concise syntax, focused on object definitions
   - JSON Schema: More verbose, JSON-based syntax

2. **Type Safety**
   - SODL: Strong static typing with precise numeric types
   - JSON Schema: Dynamic typing with broader type categories

3. **Validation**
   - SODL: Built-in constraints with a focus on data integrity
   - JSON Schema: Extensive validation capabilities but more complex syntax

4. **Tooling**
   - SODL: Purpose-built for data modeling with relationship support
   - JSON Schema: Broader ecosystem with various validation tools

### SODL vs SQL DDL

1. **Focus**
   - SODL: Object-oriented data modeling with rich relationships
   - SQL DDL: Relational data modeling with tables and foreign keys

2. **Constraints**
   - SODL: Built-in support for range and pattern constraints
   - SQL DDL: Extensive constraint system with CHECK clauses

3. **Type System**
   - SODL: Consistent cross-platform types
   - SQL DDL: Database-specific type systems

4. **Relationships**
   - SODL: KeyMaps provide flexible relationship modeling
   - SQL DDL: Foreign key constraints with referential integrity

### SODL vs GraphQL Schema

1. **Purpose**
   - SODL: Focus on data modeling and storage
   - GraphQL: Focus on API design and query patterns

2. **Type System**
   - SODL: Rich built-in types with constraints
   - GraphQL: Simpler type system with custom scalar support

3. **Relationships**
   - SODL: Explicit relationship modeling through KeyMaps
   - GraphQL: Implicit relationships through field types

4. **Validation**
   - SODL: Built-in validation constraints
   - GraphQL: Requires custom directive implementation

## Key Advantages of SODL

1. **Precision in Data Modeling**
   - Fine-grained type system
   - Built-in constraint support
   - Clear relationship modeling

2. **Data Integrity**
   - Strong validation capabilities
   - Explicit strict/optional field marking
   - Type safety across implementations

3. **Maintainability**
   - Clear, readable syntax
   - Modular import system
   - Structured relationship definitions

4. **Flexibility**
   - Support for various data modeling patterns
   - Rich type composition
   - Extensible through imports

### SODL vs Apache Parquet

While SODL and Parquet might seem very different at first glance, they both deal with data structure definition and organization, albeit for different purposes and at different stages of the data lifecycle. Let's explore their similarities and differences:

1. **Primary Purpose**
   
   SODL serves as a language for defining data structures and relationships at the application and service level, focusing on how data should be organized and validated during its active use. Parquet, on the other hand, is a columnar storage format designed for efficient data storage and retrieval, particularly for analytical workloads.

2. **Schema Definition Approach**

   SODL provides a rich, human-readable syntax for defining complex data structures with relationships and constraints. Here's how a simple user record might look in SODL:

   ```sodl
   object User {
       userId: type = UUID, assigned = counter, required, key;
       age: type = uint8, range(0, 120);
       email: type = string, pattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
   }
   ```

   Parquet schemas are typically defined using message type definitions in protocol buffers style:

   ```
   message User {
     required binary user_id (UTF8);
     required int32 age;
     required binary email (UTF8);
   }
   ```

3. **Data Organization**

   SODL focuses on logical organization:
   - Hierarchical structure through nested objects
   - Explicit relationship definitions via KeyMaps
   - Support for complex types and constraints
   - Focus on data integrity and validation

   Parquet focuses on physical organization:
   - Columnar storage for better compression
   - Column chunks and row groups
   - Statistics and encoding at the column level
   - Optimization for read performance

4. **Type System**

   SODL provides:
   - Fine-grained numeric types (uint8 through uint64)
   - Built-in support for complex types like UUID and Timestamp
   - User-defined types and unions
   - Constraint definitions within the type system

   Parquet supports:
   - Basic types (INT32, INT64, FLOAT, DOUBLE, BOOLEAN)
   - Encoded types through logical types
   - Repeated and required fields
   - Limited validation capabilities

5. **Use Cases**

   SODL is ideal for:
   - Application data model definition
   - Service interface contracts
   - Data validation rules
   - Relationship modeling
   - Business logic constraints

   Parquet excels at:
   - Big data storage
   - Analytical query optimization
   - Data warehousing
   - Column-oriented processing
   - Compression efficiency

6. **Schema Evolution**

   SODL handles evolution through:
   - Explicit optional/required field marking
   - Strict mode for field values
   - Import system for type reuse
   - Clear relationship versioning through KeyMaps

   Parquet manages evolution through:
   - Adding/removing optional fields
   - Column addition/removal
   - Schema merging capabilities
   - Backward compatibility support

7. **Complementary Usage**

SODL and Parquet often complement each other in a data pipeline:

```
[Application Layer]
    SODL Definitions
        - Define data structure
        - Validate input
        - Manage relationships
            ↓
[Processing Layer]
    Data Transformation
        - Convert to columnar format
        - Optimize for analytics
            ↓
[Storage Layer]
    Parquet Storage
        - Efficient storage
        - Fast analytical queries
```

8. **Performance Characteristics**

SODL focuses on:
- Compile-time type safety
- Runtime validation efficiency
- Relationship integrity
- Memory-efficient representations

Parquet optimizes for:
- Disk space efficiency
- Read performance for analytical queries
- CPU efficiency in data processing
- Memory efficiency in column handling

9. **Integration Patterns**

A typical integration might look like this:

```sodl
// SODL definition for active data
object AnalyticsEvent {
    eventId: type = UUID, assigned = counter, required, key;
    timestamp: type = Timestamp, required;
    userId: type = UUID, required;
    eventType: type = string, required;
    properties: type = tlv<string>;## When to Choose SODL

SODL is particularly well-suited for:

1. Complex data models with intricate relationships
2. Systems requiring strong data validation
3. Projects needing clear documentation of data structures
4. Applications with strict type safety requirements
5. Systems with complex business rules around data integrity

The language's focus on structured definitions makes it especially valuable in enterprise environments where data modeling clarity and maintainability are crucial.
//       required binary key (UTF8);
//       required binary value (UTF8);
//     }
//   }
// }
```

This comparison highlights how SODL and Parquet serve different but complementary roles in a data architecture. SODL provides the rich, constrainable schema definitions needed for application-level data modeling, while Parquet offers the optimized storage format needed for analytical processing. Understanding these differences helps architects and developers choose the right tool for each part of their data pipeline.

## Conclusion

SODL provides a robust framework for data modeling with strong typing and relationship management. Its structured approach to object definition makes it particularly well-suited for projects that require clear, maintainable data models while enforcing data integrity and structure. The `.sodl` file extension helps identify these definition files within a project's codebase, making it easier to manage and organize data models.

