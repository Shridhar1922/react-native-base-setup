# react-native-base-setup

basic setup

1. Naming Conventions

- Folders: lowercase or kebab-case (e.g., components, user-profile).
- Components/Screens: PascalCase (e.g., CustomButton.tsx, HomeScreen.tsx).
- Slices/Hooks: camelCase (e.g., authSlice.ts, useAuth.ts).
- Files: Always use .tsx for files containing JSX and .ts for pure logic.

2. ResponsiveStyles
   A. Horizontal Properties [scale / horizontalScale]
   - width: (e.g., width: scale(100))
   - marginHorizontal
   - paddingHorizontal
   - left / right positions

   B. Vertical Properties [ verticalScale ]
   - height: (e.g., height: verticalScale(50))
   - marginVertical
   - paddingVertical
   - top / bottom positions

   C. Balanced Spacing [ moderateScale ]
   - margin: (Uniform all around)
   - padding: (Uniform all around)
   - borderRadius: (e.g., borderRadius: moderateScale(8))

   D. Spacing Utility (Shorthand Helpers)
   a. Usage Rule:
   Always use these inside a style array to keep components clean. Avoid nesting them inside a manual object (e.g., use [CommonStyles.row, Spacing.mH(10)] instead of { ...Spacing.mH(10) }).

   b. Helper Map:
   - mH / pH: Use for Horizontal gaps. Uses horizontalScale. Best for side-to-side spacing.
   - mV / pV: Use for Vertical gaps. Uses verticalScale. Best for top-to-bottom spacing between elements.
   - m / p: Use for Uniform all-around spacing. Uses moderateScale to ensure it doesn't become excessively large on tablets.
