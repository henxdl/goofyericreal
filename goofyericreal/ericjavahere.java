public class ericjavahere {
    public static void main(String[] args) {
        if (args.length < 1) {
            System.out.println("Usage: java ericjavahere <variable>");
            System.exit(1);
        }
        String inputVariable = args[0];
        String modifiedVariable = inputVariable + "ericjavahereWroteThis";
        System.out.println(modifiedVariable);
    }
}
